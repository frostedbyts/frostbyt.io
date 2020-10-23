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
                            <img alt="Vue Logo" class="rounded-circle img-thumb" src="@/assets/images/vanguard_api.png" />
                        </div>
                        <div class="text-center card-title">
                            <h4>Threat Intel API and Feed Aggregator</h4>
                        </div>
                        <div class="text-center">
                            <p>
                                This is a custom threat intelligence API and feed aggregator I built in C# using .NET Core 3.1. This API/aggregator aggregates or pulls from almost 30 different sources to aggregate and index both directly
                                and indirectly hundreds of different threat intelligence feeds and exposes them through a simple, standard API with relatively fast querying abilities (within seconds). The database portion of the API is powered by Entity Framework Core and at last count was indexing almost 200,000+
                                unique threat intelligence reports. The UI/documentation was built using SwaggerUI via the Swashbuckle library for .NET Core.
                            </p>
                        </div>
                        <div class="text-center">
                            <a href="https://vanguard.hyvemined.com" class="btn btn-outline-secondary">Live Site</a>
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