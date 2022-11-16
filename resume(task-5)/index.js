
const body =document.querySelector("body");
const container =document.createElement("div");
const innerContainer =document.createElement("div");
// --------------------inner Left Container----------------------
const innerLeftContainer =document.createElement("div");
// images Container
const imageContainer =document.createElement("div");
const image =document.createElement("img");
image.setAttribute("src","./asset/blank-profile-picture-973460_1280.webp");
// Summary Container
const summaryContainer=document.createElement("div");
summaryContainer.innerHTML=`<h1>Summary</h1>`;
summaryContainer.innerHTML+=`<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, alias illo obcaecati voluptatem eaque ipsum aspernatur, quod eum cum, animi a enim. Natus voluptates, accusamus repudiandae quisquam aut explicabo voluptatum!</p>`;
// Contact containeer
const contactContainer=document.createElement("div");
contactContainer.innerHTML=`<h1>Contact</h1>`;
contactContainer.innerHTML+=`<ul >
<li>Home:123-366-736728</li>
<li>Mobile:982563892</li>
<li>mani@gmail.com</li>
<li><a href="#" style="text-decoration: none;">www.resumebot.com</a></li>
<li>42,ThiraviaPuram 2th street XXXXXX </li>
</ul>`
// Soft Skills Container
const softSkillContainer=document.createElement("div");
softSkillContainer.innerHTML=`<h1>SOFT SKILLS</h1>`;
softSkillContainer.innerHTML+=` <ul>
<li>Great Communication Skills</li>
<li>Success working in any environment</li>
<li>Ability to work Under Pressure</li>
<li>Ability to follow instruction and delivier result</li>
</ul>`;
//Certification Container
const CertificationContainer=document.createElement("div");
CertificationContainer.innerHTML=`<h1>certification</h1>`;
CertificationContainer.innerHTML+=`<ul > 
<li>Google AdWords certification</li>
<li>Google Analytics certification</li>
<li>Google Analytics certification</li>
<li>Google Analytics certification</li>
</ul>`;
// -------------Inner Right Container------------
const innerRightContainer =document.createElement("div");
//nameWorkContainer
const nameWorkContainer=document.createElement("div");
nameWorkContainer.innerHTML=`<h1>Manikandan</h1>`;
nameWorkContainer.innerHTML+=`<h2>Future Developer</h2>`;
// Work Expierence Container
const workExpiContainer =document.createElement("div");
workExpiContainer.innerHTML=`<h1>Work Experience</h1>`;
workExpiContainer.innerHTML+=`<h2>MARKETING ASSISTANT</h2>`;
workExpiContainer.innerHTML+=`<p>mobom(June 20217 -June 2019)</p>`;
workExpiContainer.innerHTML+=`  <ul>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat saepe accusantium non, ratione voluptates</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat saepe accusantium non, ratione voluptates</li>                   
</ul>`;
// Education Container
const EducationContainer=document.createElement("div");
EducationContainer.innerHTML=`<h1>Education</h1>`;
EducationContainer.innerHTML+=`<h2>UNIVERSITY OF TECSAKS</h2>`;
EducationContainer.innerHTML+=` <ul>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat saepe accusantium non, ratione voluptates</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat saepe accusantium non, ratione voluptates</li> `;
// HardSkills
const HardSkills=document.createElement("div");
HardSkills.innerHTML=`<h1>HARD SKILLS</h1>`;
HardSkills.innerHTML+=` <ul>
<li>Data analysis</li>
<li>Paid Social Media advertising</li>
<li>Email Marketing</li>
<li>Search Engine marketing</li>
<li>Social Media marketing </li>
<li>viral marketing</li>
</ul>`;

//-----------------------appending the container works-----------------------------
body.append(container);
container.append(innerContainer);
innerContainer.append(innerLeftContainer);
innerContainer.append(innerRightContainer);

innerLeftContainer.append(imageContainer);
imageContainer.append(image);
innerLeftContainer.append(summaryContainer);
innerLeftContainer.append(contactContainer);
innerLeftContainer.append(softSkillContainer);
innerLeftContainer.append(CertificationContainer);

innerRightContainer.append(nameWorkContainer);
innerRightContainer.append(workExpiContainer);
innerRightContainer.append(EducationContainer);
innerRightContainer.append(HardSkills);





//--------------style adding using classes----------------
container.classList.add("Container");
// inner Container
innerContainer.classList.add("innerContainer");
//inner Left Container
innerLeftContainer.classList.add("innerLeftContainer");
innerRightContainer.classList.add("innerRightContainer");
image.classList.add("image");
summaryContainer.classList.add("summaryContainer");
contactContainer.classList.add("contactContainer");
softSkillContainer.classList.add("softSkillContainer");
CertificationContainer.classList.add("CertificationContainer");

//inner Right Container
innerRightContainer.classList.add("innerRightContainer");
nameWorkContainer.classList.add("nameWorkContainer");
workExpiContainer.classList.add("workExpiContainer");
EducationContainer.classList.add("educationContainer");
HardSkills.classList.add("hardSkills")



