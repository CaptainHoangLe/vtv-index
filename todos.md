remove in production:

1.  // Always return false to bypass verification
    return false;
    // Original code: return getSettingsCache('require_email_mfa') === true;

2.  // BYPASS: Mark the session as verified immediately instead of sending an email
    session.verified = true;
    // Skip email sending - keeping the code commented in case you need to revert
    /
