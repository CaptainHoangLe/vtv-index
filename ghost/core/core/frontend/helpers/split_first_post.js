// ### split_first_post helper
// `{{split_first_post posts}}` - Returns either the first post or the remaining posts based on the 'first' parameter
//
// Example usage:
// For first post: {{#with (split_first_post posts first=true)}}{{title}}{{/with}}
// For other posts: {{#foreach (split_first_post posts first=false)}}{{title}}{{/foreach}}

const logging = require('@tryghost/logging');

/**
 * Split posts into first post or other posts
 * @param {Array} posts - The array of posts to split
 * @param {Object} options - Handlebars options object
 * @returns {Array|Object} - Either the first post (as object) or remaining posts (as array)
 */
module.exports = function split_first_post(posts, options) {
    // Check if posts parameter is valid
    if (!posts || !Array.isArray(posts) || posts.length === 0) {
        logging.warn('split_first_post helper: posts parameter is missing or empty');
        return options.hash.first ? null : [];
    }

    // Return either the first post or the remaining posts based on the 'first' parameter
    return options.hash.first ? posts[0] : posts.slice(1);
};

// This is a synchronous helper
module.exports.async = false;