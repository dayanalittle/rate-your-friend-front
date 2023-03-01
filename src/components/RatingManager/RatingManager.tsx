// assets
import { HiStar, HiOutlineStar } from 'react-icons/hi2'

// types
import { Profile } from '../../types/models'
import { RatingManagerFormData } from '../../types/forms'

interface RatingManagerProps {
  profile: Profile;
  handleRating: (formData: RatingManagerFormData) => void;
}
const RatingManager = (props: RatingManagerProps): JSX.Element => {
  const { profile, handleRating } = props

  const ratingOptions: [1, 2, 3, 4, 5] = [1, 2, 3, 4, 5]
  const ratingCount = profile.ratingsReceived.length
  let ratingSum = 0

  profile.ratingsReceived.forEach(rating => ratingSum += rating.value)

  const profileRating = ratingCount ? ratingSum / ratingCount : 1

  const handleClick = (evt: React.MouseEvent<HTMLImageElement>): void => {
    const newValue = parseInt(evt.currentTarget.id)
    handleRating({ value: newValue, profileId: profile.id })
  }

  return (
    <section className='align-stars'>
      {ratingOptions.map((rating): JSX.Element => (
        <div
          id={rating.toString()}
          key={rating}
          onClick={handleClick}
        >
          {rating <= profileRating ? <HiStar
            id={rating.toString()}
            key={rating}
            color="yellow"
            size={50}
          /> : <HiOutlineStar color='gray' size={50} />}
        </div>
      ))}
    </section>
  )
}

export default RatingManager