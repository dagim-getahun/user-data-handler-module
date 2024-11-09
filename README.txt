User Data Handler Module

Functions 

For Student Data Controller: 

1. AddNewStudent(data: StudentsType)
   - Adds new student data
   - Takes student data to add
   - Returns MongooseResponseType with modified data

2. GetStudentData(arg: Record<string, any>)
   - Retrieves student data based on provided query arguments
   - Returns MongooseResponseType with success status and fetched data

3. ModifyStudentData(_id: string, updatedInfo: Partial<StudentsType>)
   - Updates student data for given ID with provided info
   - Takes ID and updated info
   - Returns MongooseResponseType with updated data

4. DeleteStudentData(_id: string)
   - Removes specific student data from the database
   - Takes student ID to remove
   - Returns MongooseResponseType with modified data

For Questions Data Controller:

1. AddNewQuestions(data: Partial<QuestionsHistoryType>)
   - Adds new questions data
   - Takes questions data to add
   - Returns MongooseResponseType with modified data	

2. GetQuestions(arg: Record<string, any>)
   - Retrieves questions data based on provided query arguments
   - Returns MongooseResponseType with success status and fetched data

3. ModifyQuestions(DataInfo: {_id: string, updatedInfo: Partial<QuestionsType>})
   - Updates questions data for given ID with provided info
   - Takes ID and info to update
   - Returns MongooseResponseType with modified data

4. ModifyQuestionDetails(_id: string, updatedInfo: Record<string, string | number>)
   - Updates specific question details
   - Takes question ID and detail to update
   - Returns MongooseResponseType with modified data

5. DeleteQuestions(Data_id: string)
   - Removes specific question data from the database
   - Takes question ID to remove
   - Returns MongooseResponseType with modified data

For Questions History Data Controller:

1. AddNewQuestionsHistory(data: Partial<QuestionsHistoryType>)
   - Adds new questions history data
   - Takes questions history data to add
   - Returns MongooseResponseType with modified data

2. GetQuestionsHistory(arg: Record<string, any>)
   - Retrieves questions history data based on provided query arguments
   - Returns MongooseResponseType with success status and fetched data

3. ModifyQuestionsHistory(DataInfo: {_id: string, updatedInfo: Partial<QuestionsHistoryType>})
   - Updates questions history data for given ID with provided info
   - Takes ID and info to update
   - Returns MongooseResponseType with modified data

4. DeleteQuestionsHistory(Data_id: string)
   - Removes specific questions history data from the database
   - Takes questions history ID to remove
   - Returns MongooseResponseType with modified data
