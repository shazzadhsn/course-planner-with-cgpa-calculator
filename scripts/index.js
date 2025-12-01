let semCount = 0;
const addSemBtn = document.querySelector('#add-sem-btn');

// global variables
let delBtns, delElement, addCourseBtn, courseList, individualCourse, courseDelBtns;
let newSection;

const semContainer = document.querySelector('.semesters-container');
// semester adding
addSemBtn.addEventListener('click', (event) => {
    semCount++;
    newSection = document.createElement('section');
    newSection.classList.add('semester-box', 'rounded-2xl', 'mt-5');
    newSection.setAttribute('id', semCount);
    newSection.innerHTML = `
    <div class="semester-top-box w-full rounded-xl bg-[#F1F3FF] flex justify-between p-5 shadow-sm items-center">
        <div class="top-left flex gap-8">
            <p class="sem-number">Semester: <span class="font-semibold">1</span></p>
            <p class="gpa hidden">GPA: <span class="font-semibold text-[#4F39F6]">0.00</span></p>
            <p class="credits hidden">Credits: <span class="font-semibold">0</span></p>
        </div>
        <button class="del-btn bg-red-100 py-1 px-3 rounded-lg"><i class="fa-regular fa-trash-can text-red-500"></i></button>
    </div>

    <div class="semester-bottom-box w-full rounded-xl mt-3 bg-white shadow-sm p-5">
        <div class="course-information grid md:grid-cols-3 gap-8">
            <div class="course-name flex flex-col gap-2">
                <label>Course</label>
                <input type="text" name="" class="bg-[#F3F3F5] rounded-lg p-2">
            </div>
            <div class="course-credit flex flex-col gap-2">
                <label>Credits</label>
                <input type="number" name="" class="bg-[#F3F3F5] rounded-lg p-2">
            </div>
            <div class="course-grade flex flex-col gap-2">
                <label>Grade</label>
                <select name="" class="bg-[#F3F3F5] rounded-lg p-2">
                    <option value="">select option</option>
                    <option value="">A+ (4.00) 80 to 100</option>
                    <option value="">A (3.75) 76 to 80</option>
                    <option value="">A- (3.50) 71 to 75</option>
                    <option value="">B+ (3.25) 66 to 70</option>
                    <option value="">B (3.00) 61 to 75</option>
                    <option value="">B- (2.75) 56 to 60</option>
                    <option value="">C+ (2.50) 51 to 55</option>
                    <option value="">C (2.25) 46 to 50</option>
                    <option value="">D (2.00) 40 to 45</option>
                    <option value="">F (0.00) 0 to 39</option>
                </select>
            </div>
        </div>
        <button class="add-course-btn bg-black text-white p-2 rounded-lg mt-5">Add Course</button>
        <p class="text-center mt-4">No courses added yet. Add your first course above!</p>
        <p class="hidden font-semibold mt-2">Courses</p>
        <div class="course-list">
            
        </div>
    </div>
    `;
    newSection.childNodes[1].childNodes[1].childNodes[1].childNodes[1].innerText = semCount;
    semContainer.appendChild(newSection);
    delBtns = document.querySelectorAll('.del-btn');

    for(let delBtn of delBtns) {
        delBtn.addEventListener('click', (event) => {
            parentSection = event.target.closest('section');
            parentSection.remove();
            if(semCount >= 1) {
                semCount--;
            }
        });
    }

    addCourseBtn = newSection.querySelector('.add-course-btn');
    // console.log(addCourseBtns);
        addCourseBtn.addEventListener('click', (event) => {
            event.target.nextSibling.nextSibling.classList.add('hidden');
            event.target.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove('hidden');
            individualCourse = document.createElement('div');
            individualCourse.classList.add('individual-course', 'border-1', 'rounded-lg', 'mt-3', 'flex', 'justify-between', 'items-center', 'p-4')
            individualCourse.innerHTML = `
            <div class="course-left flex items-center gap-5">
                <div class="course-icon h-15 w-15 rounded-4xl bg-[#E0E7FF] flex justify-center items-center text-xl text-[#4F39F6]"><i class="fa-solid fa-book-open"></i></div>
                <div class="course-text">
                    <p class="font-semibold">Data Structures</p>
                    <p><span class="font-semibold text-xl">0</span> Credits</p>
                </div>
            </div>

            <div class="course-right flex gap-5 justify-center items-center">
                <div class="course-grade">
                    <p class="text-lg font-semibold">A</p>
                    <p><span class="text-lg font-semibold">0.00</span> GPA</p>
                </div>
                <button class="course-delete-icon py-1 px-5 rounded-md bg-red-100"><i class="fa-regular fa-trash-can text-red-500"></i></button>
            </div>
            `;
            
            event.target.nextElementSibling.nextElementSibling.nextElementSibling.appendChild(individualCourse);

            courseDelBtns = document.querySelectorAll('.course-delete-icon');
            
            for(let courseDelBtn of courseDelBtns) {
                courseDelBtn.addEventListener('click', (event) => {
                    event.target.closest('.individual-course').remove();
                });
            }
            
        });
});



