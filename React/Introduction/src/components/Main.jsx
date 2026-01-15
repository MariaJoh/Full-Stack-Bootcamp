import Container from 'react-bootstrap/Container';
import GetStarted from './GetStarted'
import TrendingNowCard from './TrendingNowCard'

function Main() {
  return (
    <Container className='text-center mt-5'>
      <h1 className='display-4'>Unlimited movies, shows, and more</h1>
      <p className='lead'>Starts at ₹149. Cancel at any time.</p>
      <p className='lead'>Ready to watch? Enter your email to create or restart your membership.</p>
      <GetStarted />

      <h2 className='display-6'>Trending Now</h2>
      <div className='d-flex gap-4 my-5'>
        <TrendingNowCard
          image="https://m.media-amazon.com/images/I/71OHH9HaB5S.jpg"
          ranking={1}
        />
        <TrendingNowCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iHNJatSY3Yb3fbi8jyeJTbBw74r2j7M40A&s"
          ranking={2}
        />
        <TrendingNowCard 
          image="https://m.media-amazon.com/images/M/MV5BMDMyNDIzYzMtZTMyMy00NjUyLWI3Y2MtYzYzOGE1NzQ1MTBiXkEyXkFqcGc@._V1_QL75_UX480_.jpg"
          ranking={3}
        />
        <TrendingNowCard
          image="https://m.media-amazon.com/images/I/71OHH9HaB5S.jpg"
          ranking={4}
        />
        <TrendingNowCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iHNJatSY3Yb3fbi8jyeJTbBw74r2j7M40A&s"
          ranking={5}
        />
        <TrendingNowCard 
          image="https://m.media-amazon.com/images/M/MV5BMDMyNDIzYzMtZTMyMy00NjUyLWI3Y2MtYzYzOGE1NzQ1MTBiXkEyXkFqcGc@._V1_QL75_UX480_.jpg"
          ranking={6}
        />
      </div>

      <GetStarted />
    </Container>
  );
}

export default Main;