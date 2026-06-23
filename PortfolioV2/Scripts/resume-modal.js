
document.addEventListener("DOMContentLoaded", function () {

  const MICROSOFT_FORM_URL = "https://forms.office.com/r/sej776eY1A";

  const resumeBtn = document.querySelector("a.resume");
  if (!resumeBtn) return;

  // Inject modal HTML
  const modal = document.createElement("div");
  modal.id = "resume-modal";
  modal.innerHTML = `
    <div id="resume-overlay"></div>
    <div id="resume-box">
      <div id="resume-icon">📄</div>
      <h2>Requesting a Resume Copy</h2>
      <p>To protect my privacy, resume access is <strong>by approval only</strong>.</p>
      <p>You'll be routed to a short Google Form. Please provide a <strong>valid reason</strong> for your request — I review each one personally and respond within 24 hours.</p>
      <div id="resume-tags">
        <span>🔒 Privacy protected</span>
        <span>✅ Approval required</span>
        <span>⏱ Response within 24h</span>
      </div>
      <div id="resume-buttons">
        <button id="resume-cancel">Cancel</button>
        <button id="resume-proceed">Complete the Form →</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Inject styles
  const style = document.createElement("style");
  style.textContent = `
    #resume-modal { display: none; position: fixed; inset: 0; z-index: 99999; }

    #resume-overlay {
      position: absolute; inset: 0;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(4px);
    }

    #resume-box {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      background: #1a1a1a;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px;
      padding: 2rem;
      max-width: 420px;
      width: 90%;
      text-align: center;
      color: #ffffff;
      font-family: Inter, Arial, sans-serif;
      box-shadow: 0 20px 60px rgba(0,0,0,0.6);
      animation: popIn 0.25s ease;
    }

    @keyframes popIn {
      from { opacity: 0; transform: translate(-50%, -48%) scale(0.97); }
      to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }

    #resume-icon { font-size: 2rem; margin-bottom: 0.75rem; }

    #resume-box h2 {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #ffffff;
    }

    #resume-box p {
      font-size: 14px;
      color: #aaaaaa;
      line-height: 1.6;
      margin-bottom: 0.75rem;
    }

    #resume-box p strong { color: #ffffff; }

    #resume-tags {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
      margin: 1rem 0 1.5rem;
    }

    #resume-tags span {
      font-size: 12px;
      padding: 4px 10px;
      border-radius: 999px;
      background: rgba(31,78,121,0.3);
      border: 1px solid rgba(31,78,121,0.5);
      color: #7eb8e8;
    }

    #resume-buttons {
      display: flex;
      gap: 10px;
      justify-content: center;
    }

    #resume-cancel {
      padding: 10px 20px;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.15);
      background: transparent;
      color: #aaaaaa;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.2s;
    }

    #resume-cancel:hover { background: rgba(255,255,255,0.07); }

    #resume-proceed {
      padding: 10px 20px;
      border-radius: 8px;
      border: none;
      background: rgb(160, 32, 32);
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }

    #resume-proceed:hover { background: #2563a8; }
  `;
  document.head.appendChild(style);

  // Show modal on Resume click
  resumeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "block";
  });

  // Close on Cancel
  document.getElementById("resume-cancel").addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close on overlay click
  document.getElementById("resume-overlay").addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") modal.style.display = "none";
  });

  // Proceed to Google Form
  document.getElementById("resume-proceed").addEventListener("click", function () {
    window.open(MICROSOFT_FORM_URL, "_blank");
    modal.style.display = "none";
  });

});
