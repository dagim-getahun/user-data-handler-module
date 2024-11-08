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
