<template>
    <div>
        <section class="section">
            <div class="container-fluid">
                <div class="text-center">
                    <img alt="Vue logo" class="rounded-circle" style="height:auto;width:auto;max-height:300px;max-width:300px" src="@/assets/images/cropped_profile.png" />
                </div>

                <div class="text-center">
                    <h3>Security Researcher/Software Dev/Gamedev</h3>
                </div>
                <div class="text-center">
                    <p>
                        Hey, I'm Turner, but I go by frostbyt/underscore_frosty (or variations thereof) pretty much everywhere online. I'm a security researcher by trade where I mainly focus on automation and tool development for the
                        'blue team'. Things such a threat intelligence feed aggregation, task automation, configuration automation, those sorts of thing. On the side I dabble in my own software development, particularly with a renewed focus on
                        web development. I also dabble in game development from time to time and have competed in two gamejams before. I am also a firearms enthusiast and enjoy building and shooting guns as my main hobby. I also like to game
                        from time to time, although I haven't been doing much of that in recent months.
                    </p>
                </div>
                <div class="text-center">
                    <a class="btn btn-primary btn-lg" href="https://github.com/frostedbyts">Github</a>
                </div>

            </div>
        </section>
        
    </div>
</template>

<script>
    import Contact from './Contact.vue'
    export default {
        name: 'Lander',
        components: {
            Contact
        }
    }
    
</script>

<style scoped>
    .section{
        padding-top: 10%;
        padding-bottom: 10%;
        opacity: 1.0;

    }
     div.container-center{
        display: flex;
        align-items: center;
        justify-content: center
     }
</style>