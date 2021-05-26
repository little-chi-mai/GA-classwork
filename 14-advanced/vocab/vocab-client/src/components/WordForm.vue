<template>
    <form action="#" @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error">Please fill out both fields</p>
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="vietnam flag"></i> Vietnamese  
            </div>
            <input type="text" placeholder="Enter word..." v-model="word.vietnamese"/>
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="united kingdom flag"></i> English  
            </div>
            <input type="text" placeholder="Enter word..." v-model="word.english"/>
        </div>

        <button class="positive ui button">Submit</button>

    </form>
</template>

<script>
export default {
    name: 'word-form',
    props: {
        word: {
            type: Object,
            required: false,
            default: () => {
                return {
                    english: '',
                    vietnamese: ''
                }
            }
        }
    },
    data() {
        return {
            errorsPresent: false
        }
    },
    methods: {
        onSubmit() {
            if (this.word.english === '' || this.word.vietnamese === '' ) {
                this.errorsPresent = true;
            } else {
                this.errorsPresent = false;
                this.$emit('createOrUpdate', this.word); //how we let the parents know about this, can be named anything
            }    
        }
    }
}
</script>

<style>
.error {
    color: red;
}

</style>