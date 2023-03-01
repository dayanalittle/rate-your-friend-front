// assets
import bean from '../../assets/icons/bean.png'
import noBean from '../../assets/icons/noBean.png'

// types
import { Profile } from '../../types/models'

interface RatingManagerProps {
	profile: Profile;
}

const RatingManager = (props: RatingManagerProps): JSX.Element => {
	const { profile } = props

  const ratingOptions: [ 1, 2, 3, 4, 5 ] = [ 1, 2, 3, 4, 5 ]
  const ratingCount = profile.ratingsReceived.length
  let ratingSum = 0

  profile.ratingsReceived.forEach(rating => ratingSum += rating.value)

  const profileRating = ratingCount ? ratingSum / ratingCount : 1

  return (
    <section>
      {ratingOptions.map((rating): JSX.Element => (
        <img
          id={rating.toString()}
          key={rating}
          src={noBean}
          alt="Bean Symbol"
        />
      ))}
    </section>
  )
}

export default RatingManager