<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //

            'title'=>'required|max:255',
            'body'=>'required|max:5000',
            'category_id'=>'required',
        ];
    }
    public function messages(){
        return [
            'category_id.required'=>'the category field is required'
        ];
    }
}
