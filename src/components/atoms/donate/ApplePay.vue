<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { createPayment } from '@/util/rest'

// Extend window type with global Stripe
declare global {
    interface Window {
        Stripe: any
    }
}

const stripe = window.Stripe('pk_test_51KyzN8CF8LXgMIUQOHz3B5xOQrRHYPe8frOvjL7NIRLtYB3LBXjUOjA3JnqifyFttvYKhnpB54FPlYYuEcnEc3mg008HErZxiE')
const cannotPay = reactive({ value: false });
const elements = stripe.elements()
const amount = 99
const paymentRequest = stripe.paymentRequest({
    currency: 'usd',
    country: 'PL',
    requestPayerName: true,
    requestPayerEmail: true,
    total: {
        label: 'Marbl Donation',
        amount
    }
})
const paymentButton = elements.create('paymentRequestButton', {
    paymentRequest
})

onMounted(async () => {
    const canPay = await paymentRequest.canMakePayment()
    if (canPay) paymentButton.mount('.apple-pay-donate-request')
    else cannotPay.value = true;
    paymentRequest.on('paymentmethod', async (e: any) => {
        const { clientSecret } = await createPayment({ amount })
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: e.paymentMethod.id
        }, {
            handleActions: false
        })
        if (error) {
            e.complete('fail')
            return
        }
        e.complete('success')
        if (paymentIntent.status === 'requires_action') {
            stripe.confirmCardPayment(clientSecret)
        }
    })
})

</script>

<template lang="pug">
.container
    .apple-pay-donate-request(:class="{ 'cannot-pay': cannotPay.value }")
</template>

<style lang="sass">
.apple-pay-donate-request.cannot-pay
    display: none
.container
    margin: 20px
    width: 200px
</style>
