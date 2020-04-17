# Multiple Choice With Searchable Select for LimeSurvey
**A custom question theme that uses the [Select2 component](https://select2.org/) to insert a searchable select element to choose options of a LimeSurvey multiple-choice type question.**

Compatible with LimeSurvey versions 3.x and 4.x.

![Image Multiple-Choice-Dropdown](/Multiple-Choice-Dropdown/survey/questions/answer/multiplechoice/assets/images/mcd_3.png)

**Implementation:**

1) - **Manual installation (3.x and 4.x)** - Extract the download and upload the *Multiple-Choice-Dropdown* folder to */pathToLimeSurvey/upload/themes/question/*.
    - **Theme manager (4.x)** - Extract the download, compress (zip) the *Multiple-Choice-Dropdown* folder and import via the theme manager.

2) Create a multiple-choice question, click Save.

3) Set the question setting "Question theme" to "Multiple-Choice-Dropdown", click Save.  
![Image Select Multiple-Choice-Dropdown](/Multiple-Choice-Dropdown/survey/questions/answer/multiplechoice/assets/images/mcd_2.png)

4) Create subquestions as required.

**Notes:**

1) The LimeSurvey multiple-choice type question creates a database column for every sub-question so care should be taken with the number of choice options.

2) Array filtering and sub-question relevance will only work if the filter question(s) are in preceding groups. There is no dynamic array filtering or sub-question relevance within a single group.

3) A huge thanks to the folks at [Select2 (https://select2.org/)](https://select2.org/) for their great component.

4) The styles for the theme can be modified in */pathToLimeSurvey/upload/themes/question/Multiple-Choice-Dropdown/survey/questions/answer/multiplechoice/assets/css/mcd.css*.

5) Demo survey in */Multiple-Choice-Dropdown/survey/questions/answer/multiplechoice/assets/demo/*.
    
    
*Custom themes are given without any warranty, implied or otherwise.*
