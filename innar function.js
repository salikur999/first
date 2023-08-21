function something(greet, Name)
{
    function FirstName()
    {
        if(Name)
        {
            return Name.split(' ')[0]
        }
        else
        {
            return ''
        }
    }
    var Massage= greet + ' ' + FirstName()
    console.log(Massage)
}
something('Good Morning', 'Sabrina sultana')