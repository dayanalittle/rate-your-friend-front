// components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

// npm packages

// services

// types
import { Profile } from "../../types/models";
import { RatingManagerFormData } from '../../types/forms';

interface ProfilesProps {
  profiles: Profile[];
  handleRating: (formData: RatingManagerFormData) => void;
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props

  if (!profiles.length) return <p>No profiles yet</p>

  return (
    <main className='list'>
      {props.profiles.map((profile: Profile) =>
        <ProfileCard
          key={profile.id.toString()}
          profile={profile}
          handleRating={props.handleRating}
        />
      )}
    </main>
  )
}

export default Profiles
