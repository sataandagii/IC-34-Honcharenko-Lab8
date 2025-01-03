const form = document.querySelector('.fill');
const formData = {
    email: "",
    message: "",
};

const key = "save";

window.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(key);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";

        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }
});

form.addEventListener('input', (event) => {
    const name = event.target.name;
    const value = event.target.value;

    formData[name] = value.trim();
    localStorage.setItem(key, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Please fill in every form");
        return;
    }

    console.log(formData);

    formData.email = "";
    formData.message = "";
    localStorage.removeItem(key);
    form.reset();
});