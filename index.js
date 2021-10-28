import { MainForm } from './component/mainForm.js'

const app = document.getElementById("app");
const mainForm = new MainForm();
app.appendChild(mainForm.render())