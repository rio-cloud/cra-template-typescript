import omit from 'lodash/fp/omit';
import { Profile } from 'oidc-client';
import { UserProfile } from './loginSlice';

const stripSnakeProps = omit(['family_name', 'given_name']);

// TODO: Depending on your client subscriptions you may want to map
//       additional properties from the OAuth profile
export const mapUserProfile = (profile: Profile): UserProfile => ({
    sub: profile.sub,
    azp: profile.azp,
    givenName: profile.given_name,
    familyName: profile.family_name,
    name: profile.name,
    locale: profile.locale,
    email: profile.email,
    ...stripSnakeProps(profile),
});