// # vn_date helper
// Handlebars helper to format dates in Vietnamese style (e.g., "Thứ 6, 14/3/2025")
// Usage example in templates: {{vn_date published_at}}

const dayNames = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

// eslint-disable-next-line camelcase
module.exports = function vn_date(context) {
    if (!context) {
        return '';
    }

    // Handle passing a date object or a string
    const d = new Date(context);
    
    if (isNaN(d.getTime())) {
        return '';
    }
    
    const day = dayNames[d.getDay()];
    const dayOfMonth = d.getDate();
    const month = d.getMonth() + 1; // JavaScript months are 0-indexed
    const year = d.getFullYear();
    
    // Format as "Thứ 6, 14/3/2025"
    return `${day}, ${dayOfMonth}/${month}/${year}`;
};