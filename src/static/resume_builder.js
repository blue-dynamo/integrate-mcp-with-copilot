document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm");
    const output = document.getElementById("output");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const name = data.get("name");
        const email = data.get("email");
        const education = data.get("education");
        const experience = data.get("experience");
        const skills = data.get("skills");
        const coverLetter = data.get("cover_letter");

        // Simple resume output
        output.innerHTML = `
            <h2>Generated Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Education:</strong><br>${education.replace(/\n/g, "<br>")}</p>
            <p><strong>Experience:</strong><br>${experience.replace(/\n/g, "<br>")}</p>
            <p><strong>Skills:</strong><br>${skills.replace(/\n/g, "<br>")}</p>
            <h3>Cover Letter</h3>
            <p>${coverLetter.replace(/\n/g, "<br>")}</p>
        `;
    });
});
