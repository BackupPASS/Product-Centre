
setTimeout(function() {
    showCookieNotice();
  }, 1000);
  
  
    function hasAcceptedCookies() {
      return document.cookie.split(';').some((item) => item.trim().startsWith('cookieAccepted='));
    }
  
    function showCookieNotice() {
      if (!hasAcceptedCookies()) {
        document.getElementById('cookie-card').style.display = 'block';
      }
    }
  
    function acceptCookies() {
      document.getElementById('cookie-card').style.display = 'none'; 
  
      document.cookie = 'cookieAccepted=true; max-age=31536000'; 
    }
  
  
    document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
  
  
    setTimeout(showCookieNotice, 1000);
  
    document.cookie = "username=JohnDoe; path=/; 'sessionCookie=value; secure; HttpOnly";
  
  
  
  
