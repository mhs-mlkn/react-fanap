import React, { Component } from "react";
import ReactGA from "react-ga";
import { toast } from "react-toastify";
import { withRouter, RouteComponentProps } from "react-router-dom";

const isAnalyticsEnabled = () => {
  let enabled = localStorage.getItem("isAnalyticsEnabled");
  if (enabled === null) {
    return false;
  } else {
    return !!JSON.parse(enabled);
  }
};

const setAnalyticsEnabled = (trackingID: string, enabled: boolean) => {
  localStorage.setItem("isAnalyticsEnabled", JSON.stringify(enabled));
};

export type AnalyticsProps = {
  trackingID: string;
};

class Analytics extends Component<
  AnalyticsProps & RouteComponentProps,
  { showPrompt: boolean }
> {
  static count = 0;
  state = {
    showPrompt: false
  };

  componentDidMount() {
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    if (isAnalyticsEnabled()) {
      this.runAnalytics();
    } else {
      if (Analytics.count === 0) {
        Analytics.count += 1;
        toast(this.Prompt, {
          autoClose: false,
          onClose: this.handleClose
        });
      }
    }
  }

  runAnalytics = () => {
    const { trackingID, history } = this.props;
    ReactGA.initialize(trackingID);
    ReactGA.pageview(window.location.pathname + window.location.search);
    history.listen(location => {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname);
    });
  };

  handleAccept = () => {
    const { trackingID } = this.props;
    setAnalyticsEnabled(trackingID, true);
    this.runAnalytics();
  };

  handleClose = () => {
    Analytics.count -= 1;
  };

  Prompt = (
    <div>
      آیا موافقید؟ <button onClick={this.handleAccept}>بله</button>
    </div>
  );

  render() {
    return null;
  }
}

export { isAnalyticsEnabled, setAnalyticsEnabled };
export default withRouter(Analytics);
