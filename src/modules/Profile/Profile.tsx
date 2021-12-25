import { IProfile } from ".";
import { Button, Container } from "../../components";

interface Props {
  profile: IProfile;
}
export function Profile({ profile }: Props) {
  return (
    <div className="mt-20">
      <Container size="md">
        <div className="flex">
          <div>
            <img
              src={profile.avatar}
              className="rounded-full h-32 w-32"
              alt="profile pic"
            />
          </div>
          <div className="ml-8">
            <h1 className="text-4xl font-normal text-gray-600">
              {profile.firstName} {profile.lastName}
            </h1>
            <div>
              <div>
                {profile.city}, {profile.state}, {profile.country}
              </div>
              <div>{profile.gender}</div>
              <div>{profile.dob}</div>
            </div>
            <div>
              <p className="text-sm font-light text-gray-500">
                {profile.about}
              </p>
            </div>
            <div>
              <Button>Message</Button>
              <Button>Contact</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
