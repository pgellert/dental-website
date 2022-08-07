export const pageview = (url, tracking_id) => {
    console.log("Sending pageview event", url, tracking_id);
    console.log(window.gtag('config', tracking_id, {
      page_path: url
    }))
  }
  export const event = ({ action, category, label, value }) => {
    console.log("Sending event", action, category, label, value);
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    })
  }