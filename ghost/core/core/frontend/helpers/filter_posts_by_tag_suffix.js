// ### filter_posts_by_tag_suffix helper
// `{{filter_posts_by_tag_suffix posts tag suffix}}` - Returns posts that have the specified tag with the given suffix
//
// Example usage:
// `{{#foreach (filter_posts_by_tag_suffix posts "news" "tieu-diem")}}<div class="featured-post">{{title}}</div>{{/foreach}}`

const { SafeString } = require('../services/handlebars');
const logging = require('@tryghost/logging');

/**
 * Filter posts based on tag and suffix
 * @param {Array} posts - The array of posts to filter
 * @param {String} tag - The tag to filter by
 * @param {String} suffix - The suffix that should be at the end of the tag
 * @returns {Array} - Filtered posts that include the specified tag with the suffix
 */
// eslint-disable-next-line camelcase
module.exports = function filter_posts_by_tag_suffix(posts, tag, suffix) {
    // Log function call for debugging purposes
    logging.info(`filter_posts_by_tag_suffix called with tag: ${tag}, suffix: ${suffix}`);

    // Check if posts parameter is valid
    if (!posts || !Array.isArray(posts)) {
        logging.warn('filter_posts_by_tag_suffix helper: posts parameter is missing or not an array');
        return [];
    }

    // Check if tag parameter is provided
    if (!tag || typeof tag !== 'string') {
        logging.warn('filter_posts_by_tag_suffix helper: tag parameter is missing or not a string');
        return posts; // Return original posts if no tag provided
    }

    // Check if suffix parameter is provided
    if (!suffix || typeof suffix !== 'string') {
        logging.warn('filter_posts_by_tag_suffix helper: suffix parameter is missing or not a string');
        return posts; // Return original posts if no suffix provided
    }

    // Combine tag and suffix to create the full tag slug pattern to match
    const tagPattern = `${tag}-${suffix}`;
    console.log(`Tag pattern to match: ${tagPattern}`);
    // Filter posts that have a tag matching the pattern
    return posts.filter((post) => {
        // Check if post has tags
        if (!post.tags || !Array.isArray(post.tags) || post.tags.length === 0) {
            return false;
        }

        // Check if any tag's slug matches the pattern (tag-suffix)
        return post.tags.some(tag => tag.slug && tag.slug === tagPattern);
    });
};

// This is a synchronous helper
module.exports.async = false;