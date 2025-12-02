    function hasAcceptedCookies() {
      return document.cookie.split(";").some((item) =>
        item.trim().startsWith("cookieAccepted=")
      );
    }

    function showCookieNotice() {
      if (!hasAcceptedCookies()) {
        document.getElementById("cookie-card").style.display = "block";
      }
    }

    function acceptCookies() {
      document.getElementById("cookie-card").style.display = "none";
      document.cookie = "cookieAccepted=true; max-age=31536000; path=/";
    }

    document.getElementById("accept-cookies").addEventListener("click", acceptCookies);

    setTimeout(showCookieNotice, 1000);