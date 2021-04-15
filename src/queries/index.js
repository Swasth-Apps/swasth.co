export const requestDemo = `query requestDemo($message: String, $phone: String, $email: String!, $first_name: String,$user_type: String, $last_name: String){
  requestDemo(message: $message, email: $email, phone: $phone, first_name: $first_name,last_name: $last_name,user_type: $user_type ){
   success
  }
}`;


export const getMarketingPrograms = `query {
  getMarketingPrograms {
    id
    coachId
    coach{
        userId
        name
        email
        picture
    }
    duration{
        interval
        period
    }
    name
    description
    image
    type
    app
    gradient
    isFeatured
    isFree
    payment
    tags
    shortDescription
  }
}`;
export const getOrganizationsWithOwner = `query {
   getOrganizationsWithOwner {
    id
    teamOwnerId
    teamOwnerName
    name
    description
    image
  }
}`;

export const getOrganizationWithMembersAndPrograms = `query getOrganizationWithMembersAndPrograms($organizationId: String!){
   getOrganizationWithMembersAndPrograms(organizationId: $organizationId) {
    approach {
      html
      image
    }
    comprehensive {
      html
      video
    }
    description
    id
    image
    name
    programs {
      name
      app
      coach {
        name
        picture
      }
      coachId
      description
      duration {
        interval
        period
      }
      gradient
      id
      image
      isFeatured
      isFree
      payment
      shortDescription
      status
      tags
      type
    }
    teamOwnerId
    teamOwnerName
    teamMembers {
      name
      picture
      userId
      description
    }
  }
}`;

export const getProviderSlug = `query getProviderSlug($slug: String!) {
  getProviderSlug(slug: $slug) {
    id
    name {
      first
      full
      last
    }
    email
    address {
      zip
      country
      city
      state
    }
    bio
    about
    coverImg
    phone
    profileImg
    qualifications {
      certification
      image
      qualification_year
      school
    }
    awards {
      award
      givenBy
      image
      year
    }
    resources {
      description
      image
      resource
      title
      type
    }
    slug
  }
}
`;


export const getTracksList = `
    query getTracksList {
        getTracksList {
            id
            name
            sequence
            topics
            module
            isFree
            image
            marketingImage
            tags
            description
            isFeatured
            slug
            price
            sessions{
                name
                sequence
                lessons
                activityGroups {
                    id
                    name
                    sequence
                    activities {
                        details
                        id
                        name
                        icon
                        type
                    }
                }
            }
        }
    }
`;

export const getTopics = `
    query getTopics {
        getTopics {
            id
            name
            sequence
            image
            description
            icon
        }
    }
`;
