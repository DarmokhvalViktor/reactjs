const baseURL = "https://jsonplaceholder.typicode.com"

const posts = "/posts"
const todos = "/todos"
const albums = "/albums"
const comments = "/comments"

const urls = {
    posts: {
        base: posts,
        byUserId: (userId) => `${users}/${userId}/posts`,
        byPostId: (postId) => `${posts}/${postId}`
    },
    todos,
    albums,
    comments
}

export {
    baseURL,
    urls
}