const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '1d1c79a6ff4ae5770a4f5784be9db0d3',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;