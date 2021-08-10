const MutePerson = (bot,args,client) => {

    const mutedRole = bot.guild.roles.cache.get('821907441826398247');
    const target = bot.mentions.members.first();
    target.roles.add(mutedRole);
    setTimeout(() => {
        target.roles.remove(mutedRole); // remove the role
    }, args[2]*1000) 
}
module.exports = {MutePerson:MutePerson}