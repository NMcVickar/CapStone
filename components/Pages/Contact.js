export default function contact(){
    return `
    <div id=content>
    <div class="container">
        <!--
The action attribute defines where on the server the form data should be sent
The method attribute specifies the HTTP method (GET or POST)
-->

        <form action="https://formspree.io/nmcvickar@aol.com" method="POST">

            <input type="text" name="firstname" placeholder="First Name" size="" autofocus required>
            <input type="text" name="lastname" placeholder="Last Name" size="" required>
<br>
            <input type="email" name="userEmail" placeholder="your.email@example.com" required>
<br>
     <label>What's this message about?
<br>
                <input type="radio" name="subject" value="professional" checked><span>I'd like to hire you!</span>
                <input type="radio" name="subject" value="personal" checked><span>Personal message</span>
                <input type="radio" name="subject" value="other" checked><span>Don't know/something else</span>
            </label>
<br>
            <label for="marketing">How did you hear about me?</label>
            <select name="marketing">
                <optgroup label="Online">
                    <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
                    <option value="github">Online Portfolio (GitHub)</option>
                    <option value="search">Search Engine</option>
                    <option value="email">Email</option>
                </optgroup>
                <optgroup label="In-Person">
                    <option value="networking">We met at a networking event</option>
                    <option value="referral">Personal referral</option>
                    <option value="random">We met somewhere else</option>
                </optgroup>
                <option value="other">Other</option>
            </select>
<br>
            <textarea name="user_message" rows="8" cols="40"></textarea>
            <input type="submit">
        </form>

    </div>
</div>
`;
}
