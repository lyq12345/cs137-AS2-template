import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
const packageJson = require('../../package.json')

// eslint-disable-next-line
if(!REACT_APP_TITLE.includes('dev')) {
  Sentry.init({
    // eslint-disable-next-line
    environment: REACT_APP_TITLE,
    // eslint-disable-next-line
    dsn: `${location.protocol}//${REACT_APP_SENTRY_PUBLIC_KEY}@${REACT_APP_SENTRY_DOMAIN}/${REACT_APP_SENTRY_PROJECTID}`,
    integrations: [
      new Integrations.BrowserTracing(),
    ],
    // eslint-disable-next-line
    // release: REACT_APP_SENTRY_RELEASE,
    tracesSampleRate: 0.1,
  });
}

export default Sentry