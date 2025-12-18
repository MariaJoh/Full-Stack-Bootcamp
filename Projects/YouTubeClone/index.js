/* Censor API key when uploading to public access on GitHub */
const apiKey = ''

let craftList = ['Appliqué', 'Beading', 'Batik', 'Bobbin Lace', 'Bookbinding', 'Calligraphy', 'Candle Making', 'Crochet', 'Cross Stitch', 'Découpage', 'Embroidery', 'Felting', 'Flower Pressing', 'Glass Etching', 'Hand Engraving', 'Intaglio', 'Jewelry Making', 'Knitting', 'Lino Printing', 'Leatherwork', 'Macramé', 'Marbling', 'Needlepoint', 'Origami', 'Patchwork', 'Pottery', 'Quilling', 'Rag Rug', 'Screen Printing', 'Silversmithing', 'Tufting', 'Tatting', 'Upholstery', 'Willow Weaving', 'Wreath Making', 'Xylography']

let chosenCraft = ""

// Random craft button
async function randomCraft() {
    // Reset dropdown and search bar if random is submitted
    const dropdown = document.getElementById("select-a-craft");
    dropdown.selectedIndex = 0
    // Choose random craft
    let craft = Math.floor(Math.random() * craftList.length)
    const selectedCraft = document.getElementById('selected-craft')
    chosenCraft = craftList[craft]
    selectedCraft.innerHTML = chosenCraft
    // Submit search
    searchYTVideos()
}

// Craft selector dropdown
document.getElementById("select-a-craft").addEventListener("change", (event) => {
    chosenCraft = event.target.value;
    const selectedCraft = document.getElementById('selected-craft')
    selectedCraft.innerHTML = chosenCraft
    // Submit search
    searchYTVideos()
});

// Begin API search code below
let currentRequestId = 0; // Tracks the latest search

// Submit search term after every selector change
async function searchYTVideos() {
    const requestId = ++currentRequestId; // Increment for each new search

    const apiURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${chosenCraft}-for-absolute-beginners&type=video&maxResults=6&videoEmbeddable=true&videoDuration=medium&videoSyndicated=true`

    try {
        const res = await fetch(apiURL)
        const data = await res.json()

        // If a newer request has started, ignore this one
        if (requestId !== currentRequestId) return

        const videoIds = data.items.map(item => item.id.videoId).join(',')
        validateVideos(videoIds, requestId) // Pass requestId
    } catch (error) {
        console.log(error)
    }
}

// Filters out private, deleted, unprocessed, and "video unavailable" embeds
async function validateVideos(videoIds, requestId) {
    const apiURL = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=status,contentDetails&id=${videoIds}`

    try {
        const res = await fetch(apiURL)
        const data = await res.json()

        // Ignore outdated responses
        if (requestId !== currentRequestId) return

        const validVideos = data.items.filter(video => {
            const status = video.status
            const region = video.contentDetails.regionRestriction

            return (
                status.privacyStatus === "public" &&
                status.uploadStatus === "processed" &&
                !region?.blocked?.includes("US")
            )
        })

        displayVideos(validVideos)
    } catch (error) {
        console.log(error)
    }
}

function displayVideos(videos) {
    const videosList = document.getElementById('videos-list')
    videosList.innerHTML = ''

    if (!videos.length) {
        videosList.innerHTML = "<p>No available videos found.</p>"
    }

    videos.slice(0, 6).forEach(video => {
        const colDiv = document.createElement('div')
        colDiv.classList.add('col-xl-4', 'col-lg-6', 'col-md-12', 'text-center')

        const iframe = document.createElement('iframe')
        iframe.width = '100%'
        iframe.src = `https://www.youtube.com/embed/${video.id}`
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        iframe.setAttribute('allowfullscreen', true)

        iframe.onerror = () => {
            colDiv.remove()
        }

        colDiv.append(iframe)
        videosList.append(colDiv)
    })
}

if (!videos.length) {
    videosList.innerHTML = "<p>No available videos found.</p>"
}