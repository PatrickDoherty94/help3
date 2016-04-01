function hideNext()
{
    $(".list-group-item").on(click), function()
    {
        $(this).parent().next().toggle();
        return false;
    }
}