import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/cristi-hu%C8%9Banu-a10a40237?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BN73wmCifRNaKMYwoKb0sEQ%3D%3D"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://www.facebook.com/cristi.hutanu.5"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-facebook-f"></i>
      </a>

      <a
        href="https://www.github.com/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
