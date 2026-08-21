import React from 'react'
// Importing our shared Navbar component to display at the top of the page
import Navbar from '../shared/Navbar'
// Importing UI components we installed using Shadcn
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
// Importing Link from React Router so we can navigate to the login page without refreshing the browser
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div>
            {/* The Navigation bar at the top */}
            <Navbar />
            
            {/* 
              This is the main container for the form. 
              flex, items-center, justify-center are Tailwind classes that center the form on the screen.
            */}
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                
                {/* 
                  The form tag. 
                  w-1/2 means it takes up 50% width.
                  border, rounded-md, p-4, my-10 add styling to make it look like a nice card.
                */}
                <form className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    {/* Form Heading */}
                    <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                    
                    {/* Full Name Input Field */}
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        {/* The placeholder text shows inside the box before the user types anything */}
                        <Input type="text" placeholder="patel" />
                    </div>

                    {/* Email Input Field */}
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input type="email" placeholder="user@gmail.com" />
                    </div>

                    {/* Phone Number Input Field */}
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input type="text" placeholder="8080808080" />
                    </div>

                    {/* Password Input Field */}
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input type="password" placeholder="patel" />
                    </div>

                    {/* 
                      This section holds the Radio Buttons (Student vs Recruiter) 
                      and the Profile Picture upload input side-by-side (justify-between).
                    */}
                    <div className='flex items-center justify-between'>
                        {/* Radio buttons container */}
                        <div className='flex items-center gap-4 my-5'>
                            <div className='flex items-center gap-2'>
                                {/* 
                                  We use regular inputs with type="radio". 
                                  They must have the exact same 'name' attribute ("role") so you can only select one at a time.
                                */}
                                <Input type="radio" name="role" value="student" className="cursor-pointer" />
                                <Label>Student</Label>
                            </div>
                            <div className='flex items-center gap-2'>
                                <Input type="radio" name="role" value="recruiter" className="cursor-pointer" />
                                <Label>Recruiter</Label>
                            </div>
                        </div>

                        {/* Profile Photo Upload Field */}
                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            {/* accept="image/*" ensures the user can only select image files (like png, jpg) */}
                            <Input accept="image/*" type="file" className="cursor-pointer" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    {/* w-full makes the button stretch across the entire width of the form */}
                    <Button type="submit" className="w-full my-4">Signup</Button>

                    {/* Link to navigate to the Login page if they already have an account */}
                    <span className='text-sm'>
                        Already have an account? <Link to="/login" className='text-blue-600'>Login</Link>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Signup
