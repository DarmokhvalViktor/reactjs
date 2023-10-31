const baseURL = "https://jsonplaceholder.typicode.com";

const comments = "/comments";
const users = "/users";
const posts = "/posts";

const urls = {
    users: {
        users,
        getUserById:(userId) => `${users}/${userId}`
    },
    comments: {
        byPostId: (postId) => `${posts}/${postId}/${comments}`
    },
    posts: {
        getById: (postId) => `${posts}/${postId}`,
        getByUserId: (userId) => `${users}/${userId}/posts`
    }
}

export {
    baseURL,
    urls
}