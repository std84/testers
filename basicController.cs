using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using test.MODAL;
using test.REPOSITORY;
using Newtonsoft.Json;
namespace test.API.Controllers;

[ApiController]
[Route("[controller]")]
public class basicController : ControllerBase
{



private readonly IBasicRepository _repo;

    public basicController(IBasicRepository repo)
    {
       _repo= repo;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
          
               return Ok(await _repo.GetData());
    } 
    [HttpGet("{id}")]
    public async Task<IActionResult> getdataById(int id)
    {
      
              return Ok(await _repo.GetDataByID(id));
    } 
    [HttpPost]
    public async Task<IActionResult> Post(basicModal modal){

                await Task.Delay(3000);
                await _repo.UpdateData(modal);

                return Ok(JsonConvert.SerializeObject("good"));
            
          //  return BadRequest("failed to insert");
    }
    
    [HttpPut]
    public async Task<IActionResult> Put(basicModal modal){

           
          var res = await _repo.UpdateData(modal);

            if(res == true)
                return Ok(res);
            
            return Ok("faild to update");
    }
        [HttpDelete]
    public async Task<IActionResult> Delete(){

           
          var res = await _repo.DeleteData();

            if(res == true)
                return Ok(res);
            
            return BadRequest("faild to delet");
    }
}
