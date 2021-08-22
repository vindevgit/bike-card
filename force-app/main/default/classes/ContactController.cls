public class ContactController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
        return [Select Id, Name, Title, Phone, Email From Contact LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(String searchKey){
        String key = '%' + searchKey + '%';
        return [Select Id, Name, Title, Phone, Email From Contact Where Name Like :key LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        //return [Select Id, FirstName, LastName, Email From Contact];
        throw new AuraHandledException('Forced Error');
    }
}
