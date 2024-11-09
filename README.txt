User Data Handler Module

Functions 

For Student Data Controller: 

1. GetStudentData(arg: Record<string, any>)
   - Retrieves student progress data based on provided query arguments
   - Returns MongooseResponseType with success status and fetched data

2. GetStudentDataById(Data_id: String)
   - Fetches specific progress data by ID 
   - Returns MongooseResponseType with the found data

3. ModifyStudentData(DataInfo: {_id: string, updatedInfo: any})
   - Updates student progress data for given ID with provided info
   - Returns MongooseResponseType with updated data

4. UpdateStudentProgressDetail(userId: string, progressId: string, updateDetail: {name: string, value: any})
   - Updates specific progress detail (counter, complete status etc.) for a student
   - Takes user ID, progress ID and detail to update
   - Returns MongooseResponseType with modified data

5. AddStudentProgressData(userId: string, newProgress: Partial<ProgressType>)
   - Adds new progress entry to student data
   - Takes user ID and progress data to add
   - Returns MongooseResponseType with modified data

6. RemoveStudentProgressData(userId: string, progressId: string)
   - Removes specific progress entry from student data
   - Takes user ID and progress ID to remove
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
   - Updates specific question details (counter, complete status etc.) for a student
   - Takes user ID, progress ID and detail to update
   - Returns MongooseResponseType with modified data

5. DeleteQuestionData(_id: string)
   - Removes specific question data from the database
   - Takes question ID to remove
   - Returns MongooseResponseType with modified data

For User Data Controller:

1. AddNewUser(data: Partial<UserType>)
   - Adds new user data
   - Takes user data to add
   - Returns MongooseResponseType with modified data

2. GetUserData(arg: Record<string, any>)
   - Retrieves user data based on provided query arguments
   - Returns MongooseResponseType with success status and fetched data

3. ModifyUserData(_id: string, updatedInfo: Partial<UserType>)
   - Updates user data for given ID with provided info
   - Takes ID and info to update
   - Returns MongooseResponseType with modified data

4. DeleteUserData(_id: string)
   - Removes specific user data from the database
   - Takes user ID to remove
   - Returns MongooseResponseType with modified data


For Question History Data Controller:

1. AddNewQuestionHistory(data: Partial<QuestionsHistoryType>)
   - Adds new question history data
   - Takes question history data to add
   - Returns MongooseResponseType with modified data

2. GetQuestionHistory(arg: Record<string, any>)
   - Retrieves question history data based on provided query arguments
   - Returns MongooseResponseType with success status and fetched data

3. ModifyQuestionHistory(DataInfo: {_id: string, updatedInfo: Partial<QuestionsHistoryType>})
   - Updates question history data for given ID with provided info
   - Takes ID and info to update
   - Returns MongooseResponseType with modified data

4. DeleteQuestionHistory(_id: string)
   - Removes specific question history data from the database
   - Takes question history ID to remove
   - Returns MongooseResponseType with modified data

