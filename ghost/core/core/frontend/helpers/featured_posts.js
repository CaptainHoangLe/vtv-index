// ### filter_without_first helper
// `{{filter_without_first posts}}` - Returns all posts except the first one
//
// Example usage:
// `{{#foreach (filter_without_first posts)}}<div class="regular-post">{{title}}</div>{{/foreach}}`

const logging = require('@tryghost/logging');

/**
 * Filter posts to exclude the first post
 * @param {Array} posts - The array of posts to filter
 * @returns {Array} - All posts except the first one
 */
module.exports = function featured_posts(posts) {
    // Check if posts parameter is valid
    if (!posts || !Array.isArray(posts) || posts.length === 0) {
        logging.warn('featured_posts helper: posts parameter is missing or empty');
        return [];
    }

    // Return all posts except the first one
    const featuredPosts = posts.filter(post => {
        // If post has no tags, include it in regular posts
        if (!post.tags || !Array.isArray(post.tags) || post.tags.length === 0) {
            return true;
        }

        return post.tags.some(tag => tag.slug && tag.slug.endsWith("-tieu-diem"));
    }).slice(0, 4);

    return featuredPosts.slice(1);
};

// This is a synchronous helper
module.exports.async = false;