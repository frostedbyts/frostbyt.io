<template>
    <section class="portfolio">
        <div class="text-center">
            <h1>Portfolio</h1>
        </div>
        <div class="text-center">
            <p>
                Here are some projects I've worked on
            </p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card-head">
                        <!--<div class="text-center">
                            <img alt="Vue Logo" class="rounded-circle img-thumb" src="@/assets/images/vanguard_api.png" />
                        </div>
                        <div class="text-center">
                            <h4>Threat Intel API and Feed Aggregator</h4>
                        </div>-->
                    </div>
                    <div class="card-body">
                        <div class="text-center card-title">
                            <img alt="Threat Intel API" class="rounded-circle img-thumb" src="@/assets/images/vanguard_api.png" />
                        </div>
                        <div class="text-center card-title">
                            <h4>Threat Intel API and Feed Aggregator</h4>
                        </div>
                        <div class="text-center">
                            <p>
                                This is a custom threat intelligence API and feed aggregator I built in C# using .NET Core 3.1. This API/aggregator aggregates or pulls from almost 30 different sources to aggregate and index both directly
                                and indirectly hundreds of different threat intelligence feeds and exposes them through a simple, standard API with relatively fast querying abilities (within seconds). The database portion of the API is powered by Entity Framework Core and at last count was indexing almost 200,000+
                                unique threat intelligence reports. The UI/documentation was built using SwaggerUI via the Swashbuckle library for .NET Core. Unfortunately, due to security and copyright concerns, I am unable to provide a live link to this site except to those who work for my employer.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card-body">
                        <div class="text-center card-title">
                            <img alt="Now Run Game" class="rounded-circle img-thumb" src="@/assets/images/now_run.png"/>
                        </div>
                        <div class="text-center card-title">
                            <h4>Now Run - a MOONJAM 2020 Game</h4>
                        </div>
                        <div class="text-center">
                            <p>
                                This is a basic shoot-em-up dungeon crawler/rogue-ish like game I made in the Godot engine for the 2020 Mooncord game jam (sponsored by Twitch streamer MOONMOON) with a loose horror theme. 
                                All dungeons and enemies are procedurally generated at the start of each run and the goal of the game is to get from the start room to the end room without dying.
                                You can either shoot or run your way to the end. There are some bugs since this game was developed in about 72 hours (3 days) and in an engine I had never used before and with little artistic skill.
                                I do plan on continuing development of this at some point into a more refined game and releasing it on Itch.io.
                                The main reasons I chose the Godot engine as opposed to something like Unity or Unreal is that the Godot engine is 100% open-source, something I am very passionate about as I prefer to use OSS.
                                Additionally Godot's scripting language is very similar to Python and was easy to pick up and understand with the help of some tutorials. Source code and a link to the gamejam site can be found below.
                            </p>
                        </div>
                        <div class="text-center">
                            <a href="https://moonjam.vercel.app/games" class="btn btn-secondary mr-1">Gamejam Site</a>
                            <a href="https://github.com/frostedbyts/NowRun" class="btn btn-secondary">Source Code</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card-body">
                        <div class="text-center card-title">
                            <img alt="Frostbyt.io/this site" class="rounded-circle img-thumb" src="@/assets/images/site2.png"/> 
                        </div>
                        <div class="text-center card-title">
                            <h4>This Site</h4>
                        </div>
                        <div class="text-center">
                            <p>
                                This site, my portfolio, is my first 'true' webdev type project in the sense that the majority of it involved writing JavaScript, HTML, and CSS. This entire site has been written in Vue.js
                                with routing and navigation handled by the vue-router package. The background is from the particles.js library which was a bit of a challenge to get working correctly. The CSS/theme for the site
                                is the Bootswatch Darkly Bootstrap theme, with minor modifications here and there.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style scoped>
    .portfolio{
        padding-top: 8%;
        padding-bottom: 10%;
    }
    .img-thumb{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }
</style>