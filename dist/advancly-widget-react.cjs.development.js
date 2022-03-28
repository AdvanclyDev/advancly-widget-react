'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var RESPONSE_STATUSES;

(function (RESPONSE_STATUSES) {
  RESPONSE_STATUSES["SUCCESS"] = "success";
  RESPONSE_STATUSES["CANCEL"] = "cancel";
})(RESPONSE_STATUSES || (RESPONSE_STATUSES = {}));

var ENVIRONMENT;

(function (ENVIRONMENT) {
  ENVIRONMENT["TEST"] = "test";
  ENVIRONMENT["STAGING"] = "staging";
  ENVIRONMENT["PRODUCTION"] = "production";
})(ENVIRONMENT || (ENVIRONMENT = {}));

var index = {
  __proto__: null,
  get RESPONSE_STATUSES () { return RESPONSE_STATUSES; },
  get ENVIRONMENT () { return ENVIRONMENT; }
};

var AdvanclyWidget = function AdvanclyWidget(_ref) {
  var aggregator_id = _ref.aggregator_id,
      bank_account_number = _ref.bank_account_number,
      bank_code = _ref.bank_code,
      borrower_phone = _ref.borrower_phone,
      bvn_number = _ref.bvn_number,
      _ref$aggregator_loan_ = _ref.aggregator_loan_ref,
      aggregator_loan_ref = _ref$aggregator_loan_ === void 0 ? "" + Date.now().toString() : _ref$aggregator_loan_,
      cac_number = _ref.cac_number,
      city = _ref.city,
      company_name = _ref.company_name,
      customer_type = _ref.customer_type,
      email = _ref.email,
      first_name = _ref.first_name,
      gender = _ref.gender,
      last_name = _ref.last_name,
      photo_url = _ref.photo_url,
      public_key = _ref.public_key,
      residence_address = _ref.residence_address,
      state = _ref.state,
      product_id = _ref.product_id,
      product_code = _ref.product_code,
      tenure = _ref.tenure,
      customStyles = _ref.customStyles,
      onSuccess = _ref.onSuccess,
      onCancel = _ref.onCancel,
      showWidget = _ref.showWidget,
      _ref$autoStart = _ref.autoStart,
      autoStart = _ref$autoStart === void 0 ? false : _ref$autoStart,
      _ref$environment = _ref.environment,
      environment = _ref$environment === void 0 ? ENVIRONMENT.TEST : _ref$environment;
  var msgToPost = {
    aggregator_id: aggregator_id,
    bank_account_number: bank_account_number,
    bank_code: bank_code,
    borrower_phone: borrower_phone,
    bvn_number: bvn_number,
    aggregator_loan_ref: aggregator_loan_ref,
    cac_number: cac_number,
    city: city,
    company_name: company_name,
    customer_type: customer_type,
    email: email,
    first_name: first_name,
    gender: gender,
    last_name: last_name,
    photo_url: photo_url,
    public_key: public_key,
    residence_address: residence_address,
    state: state,
    product_id: product_id,
    product_code: product_code,
    tenure: tenure,
    customStyles: customStyles
  };

  var BASE_URL = function BASE_URL() {
    switch (environment) {
      case ENVIRONMENT.TEST:
        return "https://advancly-borrower.test.vggdev.com/create-loan-account/";

      case ENVIRONMENT.STAGING:
        return "https://advancly-borrower.staging.vggdev.com/create-loan-account/";

      case ENVIRONMENT.PRODUCTION:
        return "https://borrower.advancly.com/create-loan-account/";

      default:
        return "https://advancly-borrower.test.vggdev.com/create-loan-account/";
    }
  };

  var advanclyWidget = react.useCallback(function () {
    var openWidget = function openWidget() {
      var style = document.createElement("style");
      style.innerHTML = " \n        body {\n        margin: 0;\n      }\n      .advancly {\n        border: none;\n        height: 100vh;\n        width: 100vw;\n        position: fixed;\n        left: 0;\n        top: 0;\n        overflow: hidden;\n      }";
      var iframeContainer = document.createElement("div");
      iframeContainer.setAttribute("class", "advancly-widget");
      var iframe = document.createElement("iframe");
      iframe.setAttribute("class", "advancly");
      iframe.src = BASE_URL();

      var closeWidget = function closeWidget() {
        return iframeContainer.remove();
      };

      window.addEventListener("message", function (e) {
        messageReceived(e == null ? void 0 : e.data);
        closeWidget();
      });
      iframeContainer.appendChild(iframe);
      document.head.appendChild(style);
      document.body.appendChild(iframeContainer);

      iframe.onload = function () {
        var _iframe$contentWindow;

        return (_iframe$contentWindow = iframe.contentWindow) == null ? void 0 : _iframe$contentWindow.postMessage(msgToPost, BASE_URL());
      };
    };

    openWidget(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var messageReceived = function messageReceived(data) {
    switch (data.status) {
      case RESPONSE_STATUSES.SUCCESS:
        if (onSuccess) {
          onSuccess({
            status: RESPONSE_STATUSES.SUCCESS,
            data: data == null ? void 0 : data.data
          });
        }

        break;

      case RESPONSE_STATUSES.CANCEL:
        if (onCancel) {
          onCancel({
            status: RESPONSE_STATUSES.CANCEL,
            data: data == null ? void 0 : data.data
          });
        }

        break;
    }
  };

  react.useEffect(function () {
    if (autoStart) {
      setTimeout(function () {
        advanclyWidget();
      }, 500);
    }
  }, [advanclyWidget, autoStart]);
  react.useEffect(function () {
    showWidget && advanclyWidget();
  }, [advanclyWidget, showWidget]);
  return null;
};

exports.AdvanclyWidget = AdvanclyWidget;
exports.advanclyProps = index;
exports.default = AdvanclyWidget;
//# sourceMappingURL=advancly-widget-react.cjs.development.js.map
