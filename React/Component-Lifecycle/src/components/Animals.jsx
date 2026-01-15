import { useEffect } from "react"

function Animals({ count }) {
  // componentDidMount
  useEffect(() => {
    console.log('Animals component MOUNTED')
  }, [])

  // componentDidUpdate
  useEffect(() => {
    console.log('Animals component UPDATED')
  }, [count])

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('Animals component UNMOUNTED')
    }
  }, [])

  return (
    <div>
      <h1>Animals</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reprehenderit explicabo dolores exercitationem at maxime repellat vel ipsum quos ab, amet molestiae perferendis. Eius molestias commodi itaque aperiam dignissimos delectus.</p>
      <p>{count}</p>
    </div>
  );
}

export default Animals;