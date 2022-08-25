import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class IndexController extends Controller {

  @tracked text;
  @tracked result
      
@service fetchService

@action async checkspell(){
    const option = {
        url : 'https://api.apilayer.com/dymt/did_you_mean_this?q='+this.text,
    }
    // console.log(this.text);
    const data = await this.fetchService.get_data(option);
    console.log(data);
    this.result = data.result
}
   
}
