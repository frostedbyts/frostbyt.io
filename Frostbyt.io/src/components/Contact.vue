<template>
    <div class="container" style="padding:10%;">
        <h2>Contact Me</h2>
        <form action="mailto:turner@frostbyt.io" method="post" enctype="text/plain">
            <div class="form-group">
                <input type="email" class="form-control" v-model="contact.Email" placeholder="Enter your email" />
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="contact.Subject" placeholder="Subject of your message" />
            </div>
            <div class="form-group">
                <textarea class="form-control" v-model="contact.Message" placeholder="Enter your message here"></textarea>
            </div>
        </form>
        <button type="button" @click="submit" class="btn btn-primary btn-lg">Send</button>
    </div>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                contact: {
                    Email: '',
                    Subject: '',
                    Message:''
                }
            }
        },
        methods: {
            submit() {
                if (this.contact.Email !== "" && this.contact.Subject !== "" && this.contact.Message !== "") {
                    alert("sent")
                }
                else {
                    alert("All fields are required");
                }
            }
        }
    }
</script>

<style scoped>
</style>