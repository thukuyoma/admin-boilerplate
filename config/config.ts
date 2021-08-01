export default {
  logo: { text: '/assets/logo.svg', icon: '/assets/icon.svg' },
  client: {
    clientName: 'Kimogan',
    clientDomain: 'kimogan.com',
  },
  styles: {
    baseColor: '#0C4284',
    primaryColor: '',
    accentColor: '',
    tertiaryColor: '',
  },
  cloudinary: {
    cloudName: 'www-studyovs-com',
    preset: {
      postImages: 'post-images',
      accountAvatars: 'account-avatars',
      bookingImage: 'booking-images',
      scholarshipImages: 'scholarship-images',
      blogCategoryImage: 'blog-category-image',
    },
  },
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
}
