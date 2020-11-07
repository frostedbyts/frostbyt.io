<template>
    <div class="modal-fade" id="contactModal" role="dialog" aria-label="Contact Me" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Contact Me</h5>
                    <button type="button" class="close" aria-label="Close" @click="close">X</button>
                </div>
                <div class="modal-body">
                    <div class="container text-center">
                        <form action="mailto:turner@frostbyt.io" method="post" enctype="text/plain">
                            <fieldset>
                                <div class="form-group">
                                    <label for="senderEmail">Email Address</label>
                                    <input type="email" class="form-control" id="senderEmail" placeholder="Enter your email address" v-model="contact.Email" />
                                </div>
                                <div class="form-group">
                                    <label for="messageSubject">Message Subject</label>
                                    <input type="text" class="form-control" id="messageSubject" placeholder="Subject of your message" v-model="contact.Subject" />
                                </div>
                                <div class="form-group">
                                    <label for="messageContent">Message Details</label>
                                    <textarea class="form-control" v-model="contact.Message" placeholder="Enter your message here" id="messageContent"></textarea>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div class="modal-footer text-center">
                    <button type="button" @click="submit" class="btn btn-primary btn-lg">Contact</button>
                </div>
            </div>
        </div>
    </div>
    
    <!--<div class="modal" id="contactModal" tabindex="-1" aria-hidden="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Contact Me</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="false">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container text-center">
                        <form action="mailto:turner@frostbyt.io" method="post" enctype="text/plain">
                            <fieldset>
                                <div class="form-group">
                                    <label for="senderEmail">Email Address</label>
                                    <input type="email" class="form-control" id="senderEmail" placeholder="Enter your email address" v-model="contact.Email" />
                                </div>
                                <div class="form-group">
                                    <label for="messageSubject">Message Subject</label>
                                    <input type="text" class="form-control" id="messageSubject" placeholder="Subject of your message" v-model="contact.Subject" />
                                </div>
                                <div class="form-group">
                                    <label for="messageContent">Message Details</label>
                                    <textarea class="form-control" v-model="contact.Message" placeholder="Enter your message here" id="messageContent"></textarea>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
                <div class="modal-footer text-center">
                    <button type="button" @click="submit" class="btn btn-primary btn-lg">Contact</button>
                </div>
            </div>
        </div>
    </div>-->
    
    <!--<div class="container" style="padding:10%;">
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
        <button type="button" @click="submit" class="btn btn-primary btn-lg">Contact</button>
    </div>-->
    
</template>

<script lang="ts">
    export default {
        name: 'modal',
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
                    alert("All fields are required!");
                }
            },
            close() {
                this.$emit('close');
            }
        }
    }
</script>

<style scoped>
</style>