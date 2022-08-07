export const pageview = (url, tracking_id) => {
    window.gtag('config', tracking_id, {
      page_path: url
    })
  }
  export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    })
  }