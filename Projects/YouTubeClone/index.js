/* Censor API key when uploading to public access on GitHub */
const apiKey = ''

async function searchYTVideos() {
    const searchText = document.getElementById('search-text').value
    const apiURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&q=${searchText}&type=video&maxResults=5`

    try {
        const res = await fetch(apiURL)
        const data = await res.json()
        displayVideos(data)
    } catch (error) {
        console.log(error)
    }
}

function displayVideos(data) {
    const videosList = document.getElementById('videos-list')
    videosList.innerHTML = ''

    data.items.forEach((video) => {
        const colDiv = document.createElement('div')
        colDiv.classList.add('col-xl-4', 'col-lg-6', 'col-md-12', 'text-center')

        const iframe = document.createElement('iframe')
        iframe.width = '400'
        iframe.height = '225'
        const { videoId } = video.id
        iframe.src = `https://www.youtube.com/embed/${videoId}`
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        iframe.setAttribute('allowfullscreen', true)

        colDiv.append(iframe)
        videosList.append(colDiv)
    })
}

const badges = document.getElementsByClassName('badge')
Array.from(badges).forEach(badge => {
    badge.addEventListener('click', (event) => {
        removeActiveSelection()
        badge.classList.add('text-bg-light')
        badge.classList.remove('text-bg-dark')
        document.getElementById('search-text').value = badge.innerText
        searchYTVideos()
    })
})

function removeActiveSelection() {
    Array.from(badges).forEach(badge => {
        badge.classList.remove('text-bg-light')
        badge.classList.add('text-bg-dark')
    })
}