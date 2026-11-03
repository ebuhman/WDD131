const aCourse = {
    code: "WDD131",
    name: "Dynamic Web Fundamentals",
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 353',
            enrolled: 26, days: 'TTh',
            instructor: 'Brother Thompson'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 28,
            days: 'TTh',
            instructor: 'Sister Anderson'
        }
    ],
    enrollStudent: function (sectionNumber) {
        // Find the correct section in array based on sectionNumber
        // Increment enrollment of that section by one
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNumber
        );

        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    }
}

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
